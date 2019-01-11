import data from  '~/helpers/mockdata'
const delay = 100

export class MockApi {
  getPosts (){
    return new Promise((res) =>{
      setTimeout(()=> res(data.allPosts), delay)
    })
  }

  tagPosts(){
    return new Promise((res) => {
      setTimeout(()=> res(data.tag), delay)
    })
  }

  getPost(tag){
    return new Promise((res) => {
      setTimeout(() => res(data.singlePost), delay)
    })
  }
}
