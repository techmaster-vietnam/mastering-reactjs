import axios from 'axios';
import User from '../types/User';

class UserStore {
    private fetchedFromServer = false;
    private userByUsername = new Map<string, User>();

    public async saveUser(user: User) {
        this.userByUsername.set(user.username, user);
        this.saveUserToServer(user);
    }

    public async getUserMap(): Promise<Map<string, User>> {
        if (!this.fetchedFromServer) {
            const fetchUserMap = await this.fetchUserMapFromServer();
            fetchUserMap.forEach((value, key) => {
                this.userByUsername.set(key, value);
            });
            this.fetchedFromServer = true;
        }
        return this.userByUsername;
    }

    private async saveUserToServer(user: User) {
        axios.post('http://localhost:3000/users/save', user)
      };

    private async fetchUserMapFromServer(): Promise<Map<string, User>> {
        const data = (await axios.get('http://localhost:3000/users')).data;
        const userMap = new Map<string, User>(
            Object.entries(data)
        );
        return userMap;
    }
}

export default UserStore;