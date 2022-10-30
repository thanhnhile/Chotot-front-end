import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <section className='bg-white shadow-2xl rounded-2xl max-w-3xl px-16 py-8'>
            <h2 className='text-2xl font-bold mb-4'>Đăng ký</h2>
            <p className='text-sm mb-4'>Đã có tài khoản? <Link className='font-bold underline underline-offset-1 text-lg text-yellow-400' to='auth'>Đăng nhập</Link></p>
            <form className='text-sm'>
                <input className='w-full  rounded-xl p-2 mt-4 border outline-none ' type='phone' name='phone' placeholder='Số điện thoại' required />
                <input className='w-full rounded-xl p-2 mt-4 border outline-none ' type='text' name='password' placeholder='Họ và tên' required />
                <div className='flex mt-4'>

                    <input className='w-1/2 mr-4 rounded-xl p-2 border outline-none ' type='password' name='password' placeholder='Mật khẩu' required />
                    <input className='w-1/2 rounded-xl p-2 border outline-none ' type='w-full password' name='password' placeholder='Nhập lại mật khẩu' required />
                </div>
                <textarea className='w-full h-16 min-h-max mt-4 px-2 py-1 border outline-none' placeholder='Địa chỉ' required></textarea>
                <button className='pt-1  w-full mt-8 text-lg font-medium bg-yellow-400 text-white rounded-xl'>
                    Đăng ký
                </button>
            </form>
        </section>
    )
}

export default Register