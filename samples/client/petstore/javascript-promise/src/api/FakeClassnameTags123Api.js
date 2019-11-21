/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
<<<<<<< HEAD
 * OpenAPI Generator version: 5.0.0-SNAPSHOT
=======
 * OpenAPI Generator version: 4.3.0-SNAPSHOT
>>>>>>> 4.3.x
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Client'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Client'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.FakeClassnameTags123Api = factory(root.OpenApiPetstore.ApiClient, root.OpenApiPetstore.Client);
  }
}(this, function(ApiClient, Client) {
  'use strict';

  /**
   * FakeClassnameTags123 service.
   * @module api/FakeClassnameTags123Api
   * @version 1.0.0
   */

  /**
   * Constructs a new FakeClassnameTags123Api. 
   * @alias module:api/FakeClassnameTags123Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * To test class name in snake case
     * To test class name in snake case
     * @param {module:model/Client} body client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Client} and HTTP response
     */
    this.testClassnameWithHttpInfo = function(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testClassname");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Client;
      return this.apiClient.callApi(
        '/fake_classname_test', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * To test class name in snake case
     * To test class name in snake case
     * @param {module:model/Client} body client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Client}
     */
    this.testClassname = function(body) {
      return this.testClassnameWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
