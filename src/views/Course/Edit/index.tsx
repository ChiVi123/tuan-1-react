import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editCourse, getCourse } from '../../../modules/course';
import ICourse from '../../../modules/course/entity';

function EditCourse() {
    const { id } = useParams();
    const [course, setCourse] = useState<ICourse>();
    const navigate = useNavigate();

    useEffect(() => {
        (async function (id: string) {
            const docSnap = await getCourse(id);
            if (docSnap.exists()) {
                setCourse({ id: docSnap.id, ...docSnap.data() } as ICourse);
            } else {
                console.log('No such document');
            }
        })(id || '');
    }, [id, navigate]);

    const onFinish: FormProps<ICourse>['onFinish'] = async (values) => {
        const result = await editCourse(id || '', values);
        if (result.success) {
            navigate('/');
            console.log('edit course::', result);
        } else {
            console.log('cannot edit course');
        }
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
                label='Tên khóa học'
                name='name'
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<ICourse>
                label='Mô tả'
                name='description'
                rules={[{ required: true, message: 'Please input your description!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<ICourse>
                label='Trình độ'
                name='level'
                rules={[{ required: true, message: 'Please input your level!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<ICourse>
                label='Hình ảnh'
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
                    Lưu
                </Button>
            </Form.Item>
        </Form>
    );
}

export default EditCourse;
