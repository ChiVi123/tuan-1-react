import { Button, Flex, Table, TableProps } from 'antd';
import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { courseCollection, deleteCourse } from '../../modules/course';
import ICourse from '../../modules/course/entity';

type DataType = ICourse & { key: string };

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Ten khoa hoc',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Trinh do',
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
                    <Button type='primary'>Chinh sua</Button>
                </Link>
                <Button danger onClick={() => deleteCourse(value)}>
                    Xoa
                </Button>
            </Flex>
        ),
    },
];

function Home() {
    const [courses, setCourses] = useState<DataType[]>([]);

    useEffect(() => {
        onSnapshot(courseCollection, (snapshot) => {
            setCourses(snapshot.docs.map((doc) => ({ key: doc.id, id: doc.id, ...doc.data() } as DataType)));
        });
    }, []);

    return <Table columns={columns} dataSource={courses} />;
}

export default Home;
