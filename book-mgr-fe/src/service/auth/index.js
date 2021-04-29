import axios from 'axios';  //默认导出


export const register = (account,password) => {
	return axios.post('http://localhost:3000/auth/register',{
		account,
		password,

	});
};

export const login = () => {

};