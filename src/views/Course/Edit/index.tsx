import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firestore from '../../../config/firestore';
import { editCourse } from '../../../modules/course';
import ICourse from '../../../modules/course/entity';

function EditCourse() {
    const { id } = useParams();
    const [course, setCourse] = useState<ICourse>();
    const getCourse = doc(firestore, `courses/${id}`);

    useEffect(() => {
        (async function () {
            const docSnap = await getDoc(getCourse);
            if (docSnap.exists()) {
                setCourse({ id: docSnap.id, ...docSnap.data() } as ICourse);
            } else {
                console.log('No such document');
            }
        })();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onFinish: FormProps<ICourse>['onFinish'] = async (values) => {
        const result = await editCourse(id || '', values);
        console.log('edit course::', result);
    };

    const onFinishFailed: FormProps<ICourse>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (!course) {
        return <></>;
    }

    return (
        <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={course}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
        >
            <Form.Item<ICourse>
                label='Ten khoa hoc'
                name='name'
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<ICourse>
                label='Mo ta'
                name='description'
                rules={[{ required: true, message: 'Please input your description!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<ICourse>
                label='Trinh do'
                name='level'
                rules={[{ required: true, message: 'Please input your level!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<ICourse>
                label='Hinh anh'
                name='image'
                rules={[{ required: true, message: 'Please input your image!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<ICourse>
                label='Video'
                name='videoId'
                rules={[{ required: true, message: 'Please input your videoId!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default EditCourse;
