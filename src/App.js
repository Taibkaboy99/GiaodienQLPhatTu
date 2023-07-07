import './App.css';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Table, Tag } from 'antd';
import { FaSearch } from 'react-icons/fa';
import { HomeOutlined, EditOutlined } from '@ant-design/icons';

const columns = [
    {
        title: 'Phật tử',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Pháp danh',
        dataIndex: 'phapdanh',
        key: 'phapdanh',
    },
    {
        title: 'Ngày xuất gia',
        dataIndex: 'date',
        key: 'date',
    },

    {
        title: 'Giới tính',
        dataIndex: 'gioitinh',
        key: 'gioitinh',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'trangthai',
        key: 'trangthai',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
    },
];

export const FormTable1 = ({ data2 }) => (
    <Table columns={columns} pagination={{ position: ['topLeft'] }} dataSource={data2} />
);

function App() {
    const [datas, setDatas] = useState([]);
    const [phapdanhs, setPhapdanhs] = useState('');
    const [genders, setGenders] = useState('');
    const [trangthais, setTrangthais] = useState('');
    const [names, setNames] = useState('');

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await fetch(' https://dummyjson.com/users/');
            const resJSON = await res.json();
            setDatas(resJSON);
        };
        fetchAPI();
    }, []);

    const data1 = datas?.users?.map((element) => {
        return {
            key: element.id,
            name: element.firstName,
            phapdanh: element.lastName,
            date: element.birthDate,
            gioitinh: element.gender,
            phone: element.phone,
            trangthai: element.hair.color,
            tags: <Button type="primary" shape="circle" icon={<EditOutlined />} />,
        };
    });
    const [data2, setData2] = useState([data1]);
    console.log(datas);
    const handleClick1 = () => {
        setData2(data1);
    };
    const handleClick = () => {
        console.log(names);
        setData2(
            data1?.filter((element) => {
                return (
                    genders.length === element.gioitinh.length &&
                    element.phapdanh.endsWith(phapdanhs) &&
                    element.trangthai.endsWith(trangthais) &&
                    element.name.endsWith(names)
                );
            }),
        );
    };
    const handleChangePD = (event) => {
        setPhapdanhs(event.target.value);
    };
    const handleChangeGT = (event) => {
        setGenders(event.target.value);
    };
    const handleChangeTT = (event) => {
        setTrangthais(event.target.value);
    };
    const handleChangename = (event) => {
        setNames(event.target.value);
    };
    const handleChangeEmail = () => {};
    return (
        <div className="App">
            <HomeOutlined style={{ marginLeft: '10px' }} />

            <h2 style={{ marginLeft: '10px' }}>Quản Lý Phật Tử</h2>
            <div class="FormSerch">
                <h3>
                    Tìm kiếm phật tử
                    <Button type="primary" shape="circle" size="large" icon={<FaSearch />} onClick={handleClick} />
                </h3>
                <div class="Search">
                    <div>
                        <label for="ten">Tên</label>
                        <br />
                        <input onChange={handleChangename} type="text" name="ten" />
                    </div>
                    <div>
                        <label for="PhapDanh">Pháp Danh</label>
                        <br />
                        <input onChange={handleChangePD} type="text" name="PhapDanh" />
                    </div>
                    <div>
                        <label for="gioitinh">Giới tính</label>
                        <br />
                        <select onChange={handleChangeGT} id="gioitinh" name="gioitinh">
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                        </select>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <br />
                        <input onChange={handleChangeEmail} type="email" name="email" />
                    </div>
                    <div>
                        <label for="trangthai">Trạng thái phật tử</label>
                        <br />
                        <select onChange={handleChangeTT} id="Trangthai" name="trangthai">
                            <option value=""></option>
                            <option value="Blond">Đang học chính</option>
                            <option value="Chestnut">Đã xuất gia</option>
                            <option value="Black">Đã hoàn tục</option>
                        </select>
                    </div>
                </div>
                <Button style={{ marginTop: '10px', marginLeft: '20px' }} type="primary" onClick={handleClick1}>
                    Hiển thị toàn bộ danh sách phật tử
                </Button>
            </div>
            <div className="FormTable1">
                <FormTable1 data2={data2} />
            </div>
        </div>
    );
}

export default App;
