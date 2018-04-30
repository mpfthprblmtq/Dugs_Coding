<?php include 'NavBar.php';?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="../css/MainStyle.css">
<link rel="stylesheet" href="../css/InstructorLoginScreenStyle.css">
<script src="../js/LoginScreen.js"></script>
<title>Dug's Coding | Login</title>
</head>
<body>
  <?php buildNavBar(); ?>
<table align="center">
  <tbody>
    <tr>
      <td>
        <div class="instructorLogin">
            <center><form action="../php/LoginHandler.php" onsubmit="myFunction()" method="POST">
            <br>
            <center><h2>Login to Dug's Coding</h2></center>
            <br>
            <label>Username:</label>
            <br> 
            <input id="user" type="text" class="resizedTextbox" id="user" name="user" value="">
            <br>
            <label>Password:</label> 
            <br>
            <input id="pass" type="password" class="resizedTextbox" id="pass" name="pass" value="">
            <br><br>
            <p style="position: relative; font-family: Arial; color: red; margin: 0px;"> </p>
            <br>
            <input id="submit" type="submit" class="resizedButton" value="Let's go!"></center>
            </form>
        </div> 
      </td>
      <td>
        <!-- <div class="registerClassroom">
<form name="Signup" action="../php/SignUpHandler.php" method = "post">
            <br>
              <label>Create Username:</label>
              </br>
              <input type="text" class="resizedTextbox" name="newuser">
              <br>
              <label>E-mail:</label>
              </br>
              <input type="email" class="resizedTextbox" name="lname">
              <br>
              <label>Grade Level:</label>
              <br>
              <select>
                <option value="4">Fourth</option>
                <option value="5">Fifth</option>
                <option value="6">Sixth</option>
                <option value="7">Seventh</option>
                <option value="8">Eighth</option>
              </select>
              <br>
              <label>Password:</label>
              <br>
              <input type="password" class="resizedTextbox"  name="newpass">
              <br>
              <label>Re-type Password:</label>
              <br>
              <input type="password" class="resizedTextbox" name="password2">
              <br>
              </br>
              <center><input type="submit" class="resizedButton" name ="submit" value="Sign Up"></center>
            </form>
            <br>

            <center><h2><u>Or sign up with:</u></h2></center>
              <p>
                  <center><img src="../images/Facebook-Thumbnail.jpg" width="50" height="50"/>
                  <img src="../images/Google+-Thumbnail.png" width="50" height="50"/>
                  <img src="../images/Twitter-Thumbnail.jpg" width="50" height="50"/></center>
               </p>
        </div> 
      </td> -->
    </tr>
  </tbody>
</table>
</body>

<script src="../js/LoginScreen.js"></script>
</html>


<!-- <select name="states">
                <option value="Al">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select> -->