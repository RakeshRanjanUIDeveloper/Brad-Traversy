//Init GitHub
const github = new Github;
//Init UI
const ui = new UI;
// search input
const searchUser = document.getElementById('searchUser');

//Search Input event Listener
searchUser.addEventListener('keyup' , (e) =>{
    //Get Input Text
    const userText = e.target.value;
    if(userText != ''){
        //Make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    //Show allert
                    ui.showAlert('User Not Found !!', 'alert alert-danger')
                }else{
                    //Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos)
                }
            })
    }else{
        //Clear Profile
        ui.clearProfile();
    }
})