export class Api {

  constructor( {baseUrl, headers}) {
    const {authorization, contentType} = headers;
    this._baseUrl = baseUrl;
    this._authorization = authorization;
    this._contentType = contentType;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`,
      {
        headers: {
          authorization: this._authorization,
          'Content-Type': this._contentType,
        }
      }
    )
      .then(res => {
        if (!res.ok){
          return Promise.reject(res.status)
        } else{
          return res.json();
        }
      })
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`,
      {
        headers:{
          authorization: this._authorization,
          'Content-Type': this._contentType,
        }
      }
    )
      .then(res => {
        if (!res.ok){
          return Promise.reject(res.status)
        } else{
            return res.json();
        }
      })
  }

  editUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`,{
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType,
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(res => {
        if (!res.ok){
          return Promise.reject(res.status)
        } else{
          return res.json();
        }
      })
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType,
      },
      body: JSON.stringify({
        name: name,
        link: link,
      })
    })
      .then(res => {
        if (!res.ok){
          return Promise.reject(res.status)
        } else{
          return res.json();
        }
      })
  }

  putLike(_id) {
    return fetch(`${this._baseUrl}/cards/likes/${_id}`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType,
      }
    })
      .then(res => {
        if (!res.ok){
          return Promise.reject(res.status)
        } else{
          return res.json();
        }
      })
  }

  removeLike(_id) {
    return fetch(`${this._baseUrl}/cards/likes/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType,
      }
    })
      .then(res => {
        if (!res.ok){
          return Promise.reject(res.status)
        } else{
          return res.json();
        }
      })
  }

  removeCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType,
      },
    })
      .then(res => {
        if (!res.ok){
          return Promise.reject(res.status)
        } else{
          return res.json();
        }
      })
  }

  changeAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType,
      },
      body: JSON.stringify({
        avatar: avatar,
      })
    })
      .then(res => {
        if (!res.ok){
          return Promise.reject(res.status)
        } else{
          return res.json();
        }
      })
  }
  changeLikeCardStatus(_id, isLiked) {
    if(isLiked) {
      return  this.removeLike(_id);
    }else {
      return this.putLike(_id);
    }
  }
}


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
  headers: {
    authorization: '1ab383b2-76d9-452f-83da-c9ac4a4eb776',
    contentType: 'application/json'
  }
});

export default api;
