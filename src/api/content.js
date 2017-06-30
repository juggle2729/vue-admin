/**
 * Created by zh on 17-6-27.
 */
import jsonp from 'common/js/jsonp'
import {commonParams，options} from  './config'

export function  getActivityTable() {
  const url = 'http://54.169.136.207/admin/activity/template'

  const data = Object.assign({}, commonParams, {
    channel: 'activity',
    key: 'all_all_all',
    size: 15,
    page: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })
  return jsonp(url, data, options)
}






