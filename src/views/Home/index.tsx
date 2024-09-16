import { Button, Flex, Space, Table, TableColumnsType } from 'antd';
import { Key, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../modules';
import { courseSelector, deleteAllCourse, deleteCourse, fetchAllCourse, removeAllCourse } from '../../modules/course';
import { CourseData } from '../../modules/course/entity';

const columns: TableColumnsType<CourseData> = [
    {
        title: 'Tên khóa học',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Trình độ',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: '',
        dataIndex: 'id',
        key: 'x',
        render: (value) => (
            <Flex align='center' gap='small'>
                <Link to={`/course/edit/${value}`}>
                    <Button type='primary'>Sửa</Button>
                </Link>
                <Button danger onClick={() => deleteCourse(value)}>
                    Xóa
                </Button>
            </Flex>
        ),
    },
];

function Home() {
    const [selection, setSelection] = useState<string[]>([]);
    const state = useSelector(courseSelector);
    const dispatch = useAppDispatch();

    const rowSelection = {
        onChange: (selectedRowKeys: Key[]) => {
            const keys: string[] = selectedRowKeys.map((key) => key as string);
            setSelection(keys);
        },
        getCheckboxProps: (record: CourseData) => ({
            name: record.name,
        }),
    };

    useEffect(() => {
        (async function () {
            await dispatch(fetchAllCourse());
        })();
    }, [dispatch]);

    const handleDeleteAll = async () => {
        await deleteAllCourse(selection);
        dispatch(removeAllCourse(selection));
        console.log('delete success');
    };

    console.log(state.data.map((item) => item.id));

    return (
        <Space direction='vertical' className='w-full'>
            <Flex justify='space-between'>
                {Boolean(selection.length) ? (
                    <Button danger onClick={handleDeleteAll}>
                        Xóa
                    </Button>
                ) : (
                    <div style={{ width: '40px' }}></div>
                )}
                <Link to='/course/add'>
                    <Button type='primary'>Thêm khóa học</Button>
                </Link>
            </Flex>
            {state.status !== 'pending' && (
                <Table rowSelection={{ type: 'checkbox', ...rowSelection }} columns={columns} dataSource={state.data} />
            )}
        </Space>
    );
}

export default Home;
