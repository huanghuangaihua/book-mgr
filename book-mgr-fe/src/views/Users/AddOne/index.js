import { defineComponent , reactive } from 'vue';
import { user } from '@/service';
import { result ,clone} from '@/helpers/utils';
import { message } from 'ant-design-vue';

const defaultFormData = {
    account:'',
    password:'',
};

export default defineComponent({
    props:{
        show:Boolean,
    },
    setup(props,context) {
      
        const addForm = reactive(clone(defaultFormData));


        const close =() =>{
            context.emit('update:show' ,false)
        };

        const submit = async() => {
            const form = clone(addForm);
            const res = await user.add(form.account, form.password);

            result(res)
                .success((d,{data}) => {
                    
                    Object.assign(addForm,defaultFormData);
                    message.success(data.msg);
                    close();
                    context.emit('getList');
                })
        };

       

        return{
            addForm,
            submit,
            props,
            close,
        };
    },
});