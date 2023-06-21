export const transformCodeForCodePreviewExample = (
  componentCode: string,
  exampleCode: string
) => {
  return `function App () {

    ${componentCode}
    
    ${exampleCode}
  }`;
};

export const transformCodeForSnackExample = (
  componentCode: string,
  exampleCode: string
) => {
  return `

    ${componentCode}

     function Example () {
    ${exampleCode}
  }
  export default function App () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Example />
      </View>
    )
  }
  `;
};
