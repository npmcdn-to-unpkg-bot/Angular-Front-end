"use strict";angular.module("sbAdminApp").service("Campaign",["$http","$cookies","Auth",function($http,$cookies,Auth){var serverUrl="http://api.stage.plakc.club:9000/api/v2/campaign/",authToken=Auth.getCurrntToken();this.getAll=function(){return $http({url:serverUrl,method:"GET",headers:{"content-type":"application/json","cache-control":"no-cache",Authorization:authToken}})}}]);