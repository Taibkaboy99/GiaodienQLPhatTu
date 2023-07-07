const Formserch = () => {
    return (
        <>
            <p>Tìm kiếm nâng cao</p>
            <label for="PhapDanh">Pháp Danh</label>
            <br />
            <input onChange={handleChange1} type="text" name="PhapDanh" />
            <label for="gioitinh">Giới tính</label>
            <br />
            <select id="gioitinh" name="gioitinh">
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
            </select>
            <label for="trangthai">Trạng thái phật tử</label>
            <br />
            <select id="Trangthai" name="trangthai">
                <option value="Đanghocchinh">Đang học chính</option>
                <option value="Đaxuatgia">Đã xuất gia</option>
                <option value="Dahoantuc">Đã hoàn tục</option>
            </select>
            <label for="ngayxuli">Ngày xử lí</label>
            <br />
            <input type="date" name="ngayxuli" />
        </>
    );
};
export default Formserch;
