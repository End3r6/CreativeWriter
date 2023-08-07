

const saveButton = document.querySelector('#saveButton');
const writerContent = document.getElementById('writerContent')

saveButton.addEventListener('click', () => 
{
  // Open input dialogue
  const fileName = prompt('Enter the name of the file:');
  
  // Save file with name and contents
  const fileContents = writerContent.value;

  const blob = new Blob([fileContents], { type: 'text/plain' });
  const link = document.createElement('a');
  
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
});

document.getElementById("openFile").addEventListener("click", function() 
{
    var input = document.createElement("input");
    input.type = "file";
  
    input.onchange = function(event) 
    {
        var file = event.target.files[0];
        var reader = new FileReader();
    
        reader.onload = function() {
            var text = reader.result;
            
            writerContent.value = text;
            // Do something with the text
        };
    
        reader.readAsText(file);
    };
  
    input.click();
});