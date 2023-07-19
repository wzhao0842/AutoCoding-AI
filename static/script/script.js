 async function translate() {
        var outputTextBox = document.getElementById("code_output");
        var inputTextBox = document.getElementById("user_input");
        
        console.log(inputTextBox.value);

        var translateURL =  "https://flask.sunnyzhao1.repl.co/translate";
        var uploadData = {"desc": inputTextBox.value};
        
        let respond= await fetch(
          translateURL,
          {
            method: "POST",
            body: JSON.stringify(uploadData),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }
        );  
        console.log(respond);
        console.log(respond.ok);
        
        if(respond.ok){
          let json=await respond.json();
          outputTextBox.value=json["results"];
        }
        else{
          outputTextBox.value="error";
        }
      }
      function showAbout(){
        const el=document.getElementById("aboutSection");
        el.style.display = "block";
      }

      function hideAboutAndHelp(){
        const e1=document.getElementById("aboutSection");
        const e2=document.getElementById("helpSection");
        e1.style.display = "none";
        e2.style.display = "none";
      }

      function showHelp(){
        const el=document.getElementById("helpSection");
        el.style.display = "block";
      }