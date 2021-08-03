console.log('Before..')
getuser(1,(user)=>{
    console.log('I think th reading shoul be done hear')
    console.log('user is: ',user)
    getRepositories(user.gitHubUserName,(repos)=>{
        console.log(repos)
    })
    
})


console.log('After..')


function getuser(id, callback){
    setTimeout(()=>{
       console.log('reading from the database......')
            callback({id:id, gitHubUserName:'zad'})
        },2000)
}


function getRepositories(username, callback){
    setTimeout(()=>{
        console.log('Fetching the repos.....')
        callback(['repo1','repo2','repo3'])
    },3000)
   
}