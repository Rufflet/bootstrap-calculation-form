<?php 
if(isset($_POST['emailfield'])){
    $to = 'mail@mail.com';
    $from = $_POST['emailfield'];
    $subject = "CCTV Quote Questions";
    $headers = "From:" . $from;

    
    $firstname = $_POST['firstname'];
    $lastname = $_POST['firstname'];
    $companyfield = $_POST['companyfield'];
    $phonenum = $_POST['phonenum'];
    $phoneext = $_POST['phoneext'];
    $emailfield = $_POST['emailfield'];
    $preferredcontact = $_POST['preferredcontact'];
    $locationtype = $_POST['locationtype'];
    $locationmaterial = $_POST['locationmaterial'];
    $inoutdoor = $_POST['inoutdoor'];
    $cameras = $_POST['cameras'];
    $camerasquality = $_POST['camerasquality'];
    $daysofrec = $_POST['daysofrec'];
    $monitorneeded = $_POST['monitorneeded'];
    $monitorsize = $_POST['monitorsize'];
    $mountedon = $_POST['mountedon'];
    $internetconnection = $_POST['internetconnection'];
    $planinternetconnection = $_POST['planinternetconnection'];
    $internetconnectiontype = $_POST['internetconnectiontype'];
    $installationdate = $_POST['installationdate'];
    $dateandtime = $_POST['dateandtime'];
    $features = $_POST['features'];
    $f = count($features);
    for($i=0; $i < $f; $i++)
    {
      echo($features[$i] . " checkbox ");
    }

    $files = $_POST['files'];
    $f = count($files);
    for($i=0; $i < $f; $i++)
    {
      echo($files[$i] . " ");
    }

    $additionalinfo = $_POST['additionalinfo'];


    $message = $firstname . " " . $lastname . "\n" .
    $companyfield . " " . $phonenum . "\n" .
    $phoneext . " " . $emailfield . "\n" .
    $preferredcontact . " " . $locationtype . "\n" .
    $locationmaterial . " " . $inoutdoor . "\n" .
    $cameras . " " . $camerasquality . "\n" .
    $daysofrec . " " . $monitorneeded . "\n" .
    $monitorsize . " " . $mountedon . "\n" .
    $internetconnection . " " . $planinternetconnection . "\n" .
    $internetconnectiontype . " " . $installationdate . "\n" .
    $dateandtime . " " . $features . "\n" .
    $files . " " . $additionalinfo;

    mail($to,$subject,$message,$headers);
    }
?>
