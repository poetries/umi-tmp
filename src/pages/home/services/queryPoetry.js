import request from '../../../utils/request';

export function queryPoetry() {
  return request('/v1/tang-shis');
}
