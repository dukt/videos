<?php

namespace Craft;

class VideosRequest extends BaseApplicationComponent
{
    public function __construct()
    {

    }
    public function getData()
    {
        $this->validate('amount', 'transactionId', 'card');

        $this->getCard()->validate();

        $data = $this->getBaseData();
        $data['vpc_CardNum'] = $this->getCard()->getNumber();
        $data['vpc_CardExp'] = $this->getCard()->getExpiryDate('ym');
        $data['vpc_CardSecurityCode'] = $this->getCard()->getCvv();
        $data['vpc_SecureHash']  = $this->calculateHash($data);

        return $data;
    }

    public function send()
    {
        $httpResponse = $this->httpClient->post($this->getEndpoint(), null, $this->getData())->send();

        return $this->response = new VideosResponse($this, $httpResponse->getBody());
    }


    public function send($request, $opts = array())
    {
        $query = array();
        $query['full_response'] = 1;

        $request = explode("/", $request);

        switch($request[0]) {
            case 'album':
                $method = 'vimeo.albums.getVideos';
                $query['album_id'] = $request[1];
                break;
            case 'channel':
                $method = 'vimeo.channels.getVideos';
                $query['channel_id'] = $request[1];
                break;
            case 'likes':
                $method = 'vimeo.videos.getLikes';
                break;
        }


        $videos = $this->api($method, $query);

        return Videos_VideoModel::populateModels($videos);
    }
}