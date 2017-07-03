/**
 * Created by zh on 17-6-27.
 */
import {commonParams} from './config'
import axios from 'axios'
export function getActivityTable () {
  const url = '/api/getActivity'

  const data = Object.assign({}, commonParams, {
    size: 15,
    page: 1,
    orderby: '-updated_at',
    _: 1498804211528,
    platform: 'yqq',
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}




