class GitHub {
  constructor() {
    this.client_id = 'dc982a07648fd6a50ed3';
    this.client_secret = '297a24b22bf1f26d3cb05c33a3340670b653c32a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUsers(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }

}