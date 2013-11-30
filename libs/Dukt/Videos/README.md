<?
use Dukt\Videos\Common\GatewayFactory;


$gateway = GatewayFactory::create('YouTube');

$gateway->setClientId('abc123');
$gateway->setClientSecret('abc123');
$gateway->setDeveloperKey('abc123');

$opts = ['page' => '1', 'perPage' => '15'];

$videos = $gateway->getVideos('favorites', $opts);




// $gateway = GatewayFactory::create('YouTube');
// $gateway->setClientId('abc123');
// $gateway->setClientSecret('abc123');
// $gateway->setDeveloperKey('abc123');

// $opts = ['page' => '1', 'perPage' => '15'];

// $response = $gateway->getVideos('favorites', $opts)->send();



// if ($response->isSuccessful()) {
//     // payment was successful: update database
//     print_r($response);
// } elseif ($response->isRedirect()) {
//     // redirect to offsite payment gateway
//     $response->redirect();
// } else {
//     // payment failed: display message to customer
//     echo $response->getMessage();
// }

?>