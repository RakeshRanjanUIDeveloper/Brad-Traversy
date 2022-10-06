class Github{
    constructor(){
        this.client_id = 'd09121b6bb5726d60d5e';
        this.client_secret = 'de63f52277e187c37a9d563c7452e22fd3a38d30';
        this.repos_count =5;
        this.repos_sort = 'created:asc';

    }
    async getUser (user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return{
            profile,
            repos
        }
    }
}