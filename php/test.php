<head>
  <script>

      function doStuff()
      {
        var nameElement = document.getElementById("someInput");
        var theName = nameElement.value;
        document.getElementById("someDiv").innerHTML += theName;
      }

  </script>
</head>

<html>

  <div id="someDiv">
    Hello
  </div>

  <br><br>

  <input id="someInput" type="text">
  <input type="button" value="Say Hello" onClick="doStuff()">

  <br>    
</html>