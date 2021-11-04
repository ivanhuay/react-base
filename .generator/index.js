const { prompt } = require("enquirer");
const fs = require("fs");
const path = require("path");

function copyFromComponentTemplate(type, component) {

  const typePath = path.join(__dirname, "../src/", type);
  const basePath = path.join(typePath, component);
  if (!fs.existsSync(typePath)) {
    fs.mkdirSync(typePath);
  }
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath);
  } else {
    throw new Error('A component with that name already exists');
  }
  const dir = path.join(__dirname, "./templates/component");
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    let fileContent = fs.readFileSync(path.join(dir, file), "utf8");
    fileContent = fileContent.replace(/ComponentType/g, type);
    fileContent = fileContent.replace(/Component/g, component);
    
    const destination = path.join(
      basePath,
      file.replace(/Component/g, component)
    );
    fs.writeFileSync(destination, fileContent, "utf-8");
    console.log(path.join("./src/", type, component, file.replace(/Component/g, component)));
  });
  console.log('Done.')
}

async function generator() {
  const {componentType, componentName} = await prompt([
    {
      type: "select",
      name: "componentType",
      message: "What is your component type?",
      choices: [
        { name: "atoms", message: "Atom", value: "atoms" },
        { name: "molecules", message: "Molecule", value: "molecules" },
        { name: "organisms", message: "Organism", value: "organisms" },
      ],
    },
    {
      type: "input",
      name: "componentName",
      message: "Insert component name:",
      required: true
    },
  ]);
  const { confirmation } = await prompt({
    type: "confirm",
    name: "confirmation",
    message: `Want to  create a new component in "${componentType}" called "${componentName}"?`,
  });
  if(confirmation) {
    try {
      copyFromComponentTemplate(componentType, componentName);
    } catch (e) {
      console.error('Error: ', e.message);
      console.error(e);
    }
  } else {
    console.log('Canceled component creation.')
  }
}

generator();
