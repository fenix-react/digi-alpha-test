/* eslint-disable default-case */
import axios from 'axios';
import { handleApiResponse } from 'utils/helpers';
import { isEmpty } from 'lodash';

export function request(method = 'get', url, new_header = {}, bodyData = {}, params = {}) {

    //Remove all attributes which are undefined or null
    if (Object.keys(params).length) for (let i in params) if (!params[i]) delete params[i];
  
    switch (method) {
      case 'get':
        return axios
          .get(url, { params, headers: {} })
          .then(response => {
            return {
              ...response,
              status_name: 'success'
            };
          })
          .catch(err => {
            return handleApiResponse(err?.response);
          });
      case 'post':
        return axios({
          method: 'POST',
          url,
          data: bodyData,
          headers: {}
        })
          .then(response => {
            return {
              ...response,
              status_name: 'success'
            };
          })
          .catch(err => {
            return handleApiResponse(err?.response);
          });
      case 'put':
        return axios({
          method: 'PUT',
          url,
          data: isEmpty(bodyData) ? {} : bodyData,
          headers: {}
        })
          .then(response => {
            return {
              ...response,
              status_name: 'success'
            };
          })
          .catch(err => {
            return handleApiResponse(err?.response);
          });
      case 'patch':
        return axios({
          method: 'PATCH',
          url,
          data: bodyData,
          headers: {}
        })
          .then(response => {
            return {
              ...response,
              status_name: 'success'
            };
          })
          .catch(err => {
            return handleApiResponse(err?.response);
          });
      case 'delete':
        return axios({
          method: 'DELETE',
          url,
          headers: {},
          data: bodyData
        })
          .then(response => {
            return {
              ...response,
              status_name: 'success'
            };
          })
          .catch(err => {
            return handleApiResponse(err?.response);
          });
    }
  }
  