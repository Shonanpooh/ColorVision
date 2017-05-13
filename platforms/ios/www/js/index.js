/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        //document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener('deviceready', this.startCameraAbove.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
     },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    startCameraAbove: function(){
        CameraPreview.startCamera({x: 50, y: 50, width: 300, height: 300, toBack: false, previewDrag: true, tapPhoto: true});
        CameraPreview.startCamera({x: 50, y: 350, width: 300, height: 300, toBack: false, previewDrag: true, tapPhoto: true});
    },

    startCameraBelow: function(){
        CameraPreview.startCamera({x: 50, y: 50, width: 300, height:300, camera: "front", tapPhoto: false, previewDrag: false, toBack: true});
        //CameraPreview.startCamera({x: 50, y: 70, width: 300, height:300, camera: "front", tapPhoto: false, previewDrag: false, toBack: true});
    },

    stopCamera: function(){
        CameraPreview.stopCamera();
    },

    takePicture: function(){
        CameraPreview.takePicture(function(imgData){
            document.getElementById('originalPicture').src = 'data:image/jpeg;base64,' + imgData;
        });
    },

    switchCamera: function(){
        CameraPreview.switchCamera();
    },

    show: function(){
        CameraPreview.show();
    },

    hide: function(){
        CameraPreview.hide();
    },

    changeColorEffect: function(){
        var effect = document.getElementById('selectColorEffect').value;
        CameraPreview.setColorEffect(effect);
    },

    changeFlashMode: function(){
        var mode = document.getElementById('selectFlashMode').value;
        CameraPreview.setFlashMode(mode);
    },

    changeZoom: function(){
        var zoom = document.getElementById('zoomSlider').value;
        document.getElementById('zoomValue').innerHTML = zoom;
        CameraPreview.setZoom(zoom);
    },

    changePreviewSize: function(){
        window.smallPreview = !window.smallPreview;
        if(window.smallPreview){
            CameraPreview.setPreviewSize({width: 100, height: 100});
        }else{
            CameraPreview.setPreviewSize({width: window.screen.width, height: window.screen.height});
        }
    },
    showSupportedPictureSizes: function(){
        CameraPreview.getSupportedPictureSizes(function(dimensions){
            dimensions.forEach(function(dimension) {
                console.log(dimension.width + 'x' + dimension.height);
            });
        });
    },
    init: function(){
        // document.getElementById('startCameraAboveButton').addEventListener('click', this.startCameraAbove, false);
        // document.getElementById('startCameraBelowButton').addEventListener('click', this.startCameraBelow, false);
        //
        // document.getElementById('stopCameraButton').addEventListener('click', this.stopCamera, false);
        // document.getElementById('switchCameraButton').addEventListener('click', this.switchCamera, false);
        // document.getElementById('showButton').addEventListener('click', this.show, false);
        // document.getElementById('hideButton').addEventListener('click', this.hide, false);
        // document.getElementById('takePictureButton').addEventListener('click', this.takePicture, false);
        // document.getElementById('selectColorEffect').addEventListener('change', this.changeColorEffect, false);
        // document.getElementById('selectFlashMode').addEventListener('change', this.changeFlashMode, false);

        // if(navigator.userAgent.match(/Android/i)  == "Android"){
        //     document.getElementById('zoomSlider').addEventListener('change', this.changeZoom, false);
        // }else{
        //     document.getElementById('androidOnly').style.display = 'none';
        // }
        //
        // window.smallPreview = false;
        // document.getElementById('changePreviewSize').addEventListener('click', this.changePreviewSize, false);
        //
        // document.getElementById('showSupportedPictureSizes').addEventListener('click', this.showSupportedPictureSizes, false);

        // legacy - not sure if this was supposed to fix anything
        //window.addEventListener('orientationchange', this.onStopCamera, false);
    }
};

app.initialize();
