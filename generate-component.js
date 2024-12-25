import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

// Handle __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const basePath = path.join(__dirname, 'src', 'components');
const appFilePath = path.join(__dirname, 'src', 'App.tsx');

const tsxTemplate = (componentName) => `
import './${componentName}.css';

const ${componentName} = () => {
  return (
    <section className="section ${componentName.toLowerCase()} ">
      <div className="">
        {/* Replace with your content */}
      </div>
    </section>
  );
};

export default ${componentName};
`;

// Function to add the component to App.tsx
const addToApp = (componentName) => {
  const appContent = fs.readFileSync(appFilePath, 'utf-8');

  // Import statement
  const importStatement = `import ${componentName} from './components/${componentName}/${componentName}';`;

  // Component usage
  const componentUsage = `      <${componentName} />`;

  // Check if component is already imported
  if (appContent.includes(importStatement)) {
    console.log(`The component ${componentName} is already added to App.tsx.`);
    return;
  }

  // Add import statement
  const updatedImports = appContent.replace(
    '// Import all components',
    `// Import all components\n${importStatement}`
  );

  // Add component usage before the last JSX element
  const updatedAppContent = updatedImports.replace(
    /<\/>\s*$/, // Matches the closing tag </>
    `\n${componentUsage}\n    </>` // Adds the component before the closing tag
  );

  // Write back the updated App.tsx
  fs.writeFileSync(appFilePath, updatedAppContent, 'utf-8');
  console.log(`Component ${componentName} has been added to App.tsx.`);
};

rl.question('Enter the name of the component: ', (componentName) => {
  if (!componentName) {
    console.error('Component name cannot be empty.');
    rl.close();
    return;
  }

  const componentPath = path.join(basePath, componentName);
  const tsxFilePath = path.join(componentPath, `${componentName}.tsx`);
  const cssFilePath = path.join(componentPath, `${componentName}.css`);

  // Create component folder
  if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(componentPath, { recursive: true });
  } else {
    console.error('Component folder already exists.');
    rl.close();
    return;
  }

  // Write .tsx file
  fs.writeFileSync(tsxFilePath, tsxTemplate(componentName));
  console.log(`Created ${tsxFilePath}`);

  // Write empty .css file
  fs.writeFileSync(cssFilePath, '');
  console.log(`Created ${cssFilePath}`);

  // Ask if the user wants to add the component to App.tsx
  rl.question('Do you want to add this component to App.tsx? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      addToApp(componentName);
    }
    console.log(`Component ${componentName} has been successfully created.`);
    rl.close();
  });
});
