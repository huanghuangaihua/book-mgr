import axios from 'axios';  //默认导出


export const list = (type= 'IN_COUNT',page = 1, size =20) => {
	return axios.get('http://localhost:3000/inventory-log/list',
	{
        params:{
            type,
            page,
            size,
        },
    },
	);
};
