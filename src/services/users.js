import request from '../utils/request'
// import { PAGE_SIZE } from '../constants'

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=3`);
}

export function deleteId(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}

export function editForm(id,values){
  return request(`/api/users/${id}`,{
    method: 'PATCH',
    body: JSON.stringify(values),
  })
}
