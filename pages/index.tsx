import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../components/Dropdown';
import { setPageTitle } from '../store/themeConfigSlice';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});
import Link from 'next/link';
import IconHorizontalDots from '@/components/Icon/IconHorizontalDots';
import IconDollarSign from '@/components/Icon/IconDollarSign';
import IconInbox from '@/components/Icon/IconInbox';
import IconTag from '@/components/Icon/IconTag';
import IconCreditCard from '@/components/Icon/IconCreditCard';
import IconShoppingCart from '@/components/Icon/IconShoppingCart';
import IconArrowLeft from '@/components/Icon/IconArrowLeft';
import IconCashBanknotes from '@/components/Icon/IconCashBanknotes';
import IconUser from '@/components/Icon/IconUser';
import IconNetflix from '@/components/Icon/IconNetflix';
import IconBolt from '@/components/Icon/IconBolt';
import IconPlus from '@/components/Icon/IconPlus';
import IconCaretDown from '@/components/Icon/IconCaretDown';
import IconMultipleForwardRight from '@/components/Icon/IconMultipleForwardRight';

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Sales Admin'));
    });
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    });

    return (
        <>
            <div>
                <ul className="flex space-x-2 rtl:space-x-reverse">
                    <li>
                        <Link href="/" className="text-primary hover:underline">
                            vlsi backend adventure
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Home</span>
                    </li>
                </ul>

                <div className="pt-5">

                    {/* question and answers card  */}
                    <div className="mb-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        <div className="panel h-full sm:col-span-2 xl:col-span-1">
                            <div className="flex items-center">
                                <h5 className="text-lg font-semibold dark:text-white-light">
                                    PD Question and Answers
                                    <span className="block text-sm font-normal text-white-dark">Go to columns for details.</span>
                                </h5>
                                <div className="relative ltr:ml-auto rtl:mr-auto">
                                    <div className="grid h-11 w-11 place-content-center rounded-full bg-[#ffeccb] text-warning dark:bg-warning dark:text-[#ffeccb]">
                                        <IconDollarSign />
                                    </div>
                                </div>
                            </div>
                            <div className='homeCardBody'>
                                <img src="/assets/images/qna.png" alt="profile1" className="flex h-40 w-40  object-cover" />
                                <Link href="/QnA/1" className='homeCardBodyButton'>view questions</Link>
                            </div>
                        </div>
                        <div className="panel h-full">
                            <div className="mb-5 flex items-center justify-between dark:text-white-light">
                                <h5 className="text-lg font-semibold">STA Numericals</h5>
                            </div>
                            <div className='homeCardBody'>
                                <img src="/assets/images/notes.png" alt="profile1" className="flex h-40 w-40  object-cover" />
                                <Link href="/sta/numericals" className='homeCardBodyButton  bg-green-600'>view numericals</Link>
                            </div>
                        </div>

                        <div className="panel h-full">
                            <div className="mb-5 flex items-center justify-between dark:text-white-light">
                                <h5 className="text-lg font-semibold">Post your Articles</h5>
                            </div>
                            <div className='homeCardBody'>
                                <img src="/assets/images/notes1.png" alt="profile1" className="flex h-40 w-48  object-cover" />
                                <h3>To get featured share @ ferozer3@gmail.com</h3>
                                {/* <button className='homeCardBodyButton'>view Numericals</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
                        <div className="panel h-full w-full">
                            <h5 className="mb-10 text-[30px] font-semibold dark:text-white-light">Content</h5>
                            <PerfectScrollbar className="relative mb-4 ltr:-mr-3 ltr:pr-3 rtl:-ml-3 rtl:pl-3" options={{suppressScrollX: true}}>

                                <div className="mb-8 cursor-pointer">
                                    <div className='mb-2 text-[24px] font-semibold text-blue-800'><Link href="/pages/logicals-synthesis">Logcial Synthesis</Link></div>
                                    <div className='text-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente natus eaque harum ea explicabo, dolorem ipsum molestiae vitae consectetur repellendus soluta ab vero deleniti minus non ipsa quod veritatis magni.</div>
                                </div>
                                <div className="mb-8 cursor-pointer">
                                    <div className='mb-2 text-[24px] font-semibold text-blue-800'>Logcial Synthesis</div>
                                    <div className='text-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente natus eaque harum ea explicabo, dolorem ipsum molestiae vitae consectetur repellendus soluta ab vero deleniti minus non ipsa quod veritatis magni.</div>
                                </div>
                            </PerfectScrollbar>
                            
                        </div>
                        
                        {/* <div className="panel h-full overflow-hidden border-0 p-0">
                            <div className="min-h-[190px] bg-gradient-to-r from-[#4361ee] to-[#160f6b] p-6">
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="flex items-center rounded-full bg-black/50 p-1 font-semibold text-white ltr:pr-3 rtl:pl-3">
                                        <img className="block h-8 w-8 rounded-full border-2 border-white/50 object-cover ltr:mr-1 rtl:ml-1" src="/assets/images/profile-34.jpeg" alt="avatar" />
                                        Alan Green
                                    </div>
                                    <button type="button" className="flex h-9 w-9 items-center justify-between rounded-md bg-black text-white hover:opacity-80 ltr:ml-auto rtl:mr-auto">
                                        <IconPlus className="w-6 h-6 m-auto" />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between text-white">
                                    <p className="text-xl">Wallet Balance</p>
                                    <h5 className="text-2xl ltr:ml-auto rtl:mr-auto">
                                        <span className="text-white-light">$</span>2953
                                    </h5>
                                </div>
                            </div>
                            <div className="-mt-12 grid grid-cols-2 gap-2 px-8">
                                <div className="rounded-md bg-white px-4 py-2.5 shadow dark:bg-[#060818]">
                                    <span className="mb-4 flex items-center justify-between dark:text-white">
                                        Received
                                        <IconCaretDown className="w-4 h-4 text-success rotate-180" />
                                    </span>
                                    <div className="btn w-full  border-0 bg-[#ebedf2] py-1 text-base text-[#515365] shadow-none dark:bg-black dark:text-[#bfc9d4]">$97.99</div>
                                </div>
                                <div className="rounded-md bg-white px-4 py-2.5 shadow dark:bg-[#060818]">
                                    <span className="mb-4 flex items-center justify-between dark:text-white">
                                        Spent
                                        <IconCaretDown className="w-4 h-4 text-danger" />
                                    </span>
                                    <div className="btn w-full  border-0 bg-[#ebedf2] py-1 text-base text-[#515365] shadow-none dark:bg-black dark:text-[#bfc9d4]">$53.00</div>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="mb-5">
                                    <span className="rounded-full bg-[#1b2e4b] px-4 py-1.5 text-xs text-white before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-white ltr:before:mr-2 rtl:before:ml-2">
                                        Pending
                                    </span>
                                </div>
                                <div className="mb-5 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-[#515365]">Netflix</p>
                                        <p className="text-base">
                                            <span>$</span> <span className="font-semibold">13.85</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-[#515365]">BlueHost VPN</p>
                                        <p className="text-base">
                                            <span>$</span> <span className="font-semibold ">15.66</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-around px-2 text-center">
                                    <button type="button" className="btn btn-secondary ltr:mr-2 rtl:ml-2">
                                        View Details
                                    </button>
                                    <button type="button" className="btn btn-success">
                                        Pay Now $29.51
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="panel h-full w-full">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Recent Orders</h5>
                            </div>
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="ltr:rounded-l-md rtl:rounded-r-md">Customer</th>
                                            <th>Product</th>
                                            <th>Invoice</th>
                                            <th>Price</th>
                                            <th className="ltr:rounded-r-md rtl:rounded-l-md">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="min-w-[150px] text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/profile-6.jpeg" alt="avatar" />
                                                    <span className="whitespace-nowrap">Luke Ivory</span>
                                                </div>
                                            </td>
                                            <td className="text-primary">Headphone</td>
                                            <td>
                                                <Link href="/apps/invoice/preview">#46894</Link>
                                            </td>
                                            <td>$56.07</td>
                                            <td>
                                                <span className="badge bg-success shadow-md dark:group-hover:bg-transparent">Paid</span>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/profile-7.jpeg" alt="avatar" />
                                                    <span className="whitespace-nowrap">Andy King</span>
                                                </div>
                                            </td>
                                            <td className="text-info">Nike Sport</td>
                                            <td>
                                                <Link href="/apps/invoice/preview">#76894</Link>
                                            </td>
                                            <td>$126.04</td>
                                            <td>
                                                <span className="badge bg-secondary shadow-md dark:group-hover:bg-transparent">Shipped</span>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/profile-8.jpeg" alt="avatar" />
                                                    <span className="whitespace-nowrap">Laurie Fox</span>
                                                </div>
                                            </td>
                                            <td className="text-warning">Sunglasses</td>
                                            <td>
                                                <Link href="/apps/invoice/preview">#66894</Link>
                                            </td>
                                            <td>$56.07</td>
                                            <td>
                                                <span className="badge bg-success shadow-md dark:group-hover:bg-transparent">Paid</span>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/profile-9.jpeg" alt="avatar" />
                                                    <span className="whitespace-nowrap">Ryan Collins</span>
                                                </div>
                                            </td>
                                            <td className="text-danger">Sport</td>
                                            <td>
                                                <button type="button">#75844</button>
                                            </td>
                                            <td>$110.00</td>
                                            <td>
                                                <span className="badge bg-secondary shadow-md dark:group-hover:bg-transparent">Shipped</span>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/profile-10.jpeg" alt="avatar" />
                                                    <span className="whitespace-nowrap">Irene Collins</span>
                                                </div>
                                            </td>
                                            <td className="text-secondary">Speakers</td>
                                            <td>
                                                <Link href="/apps/invoice/preview">#46894</Link>
                                            </td>
                                            <td>$56.07</td>
                                            <td>
                                                <span className="badge bg-success shadow-md dark:group-hover:bg-transparent">Paid</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="panel h-full w-full">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Top Selling Product</h5>
                            </div>
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr className="border-b-0">
                                            <th className="ltr:rounded-l-md rtl:rounded-r-md">Product</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Sold</th>
                                            <th className="ltr:rounded-r-md rtl:rounded-l-md">Source</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="min-w-[150px] text-black dark:text-white">
                                                <div className="flex">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/product-headphones.jpg" alt="avatar" />
                                                    <p className="whitespace-nowrap">
                                                        Headphone
                                                        <span className="block text-xs text-primary">Digital</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td>$168.09</td>
                                            <td>$60.09</td>
                                            <td>170</td>
                                            <td>
                                                <button type="button" className="flex items-center text-danger">
                                                    <IconMultipleForwardRight className="rtl:rotate-180 ltr:mr-1 rtl:ml-1" />
                                                    Direct
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/product-shoes.jpg" alt="avatar" />
                                                    <p className="whitespace-nowrap">
                                                        Shoes <span className="block text-xs text-warning">Faishon</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td>$126.04</td>
                                            <td>$47.09</td>
                                            <td>130</td>
                                            <td>
                                                <button type="button" className="flex items-center text-success">
                                                    <IconMultipleForwardRight className="rtl:rotate-180 ltr:mr-1 rtl:ml-1" />
                                                    Google
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/product-watch.jpg" alt="avatar" />
                                                    <p className="whitespace-nowrap">
                                                        Watch <span className="block text-xs text-danger">Accessories</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td>$56.07</td>
                                            <td>$20.00</td>
                                            <td>66</td>
                                            <td>
                                                <button type="button" className="flex items-center text-warning">
                                                    <IconMultipleForwardRight className="rtl:rotate-180 ltr:mr-1 rtl:ml-1" />
                                                    Ads
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/product-laptop.jpg" alt="avatar" />
                                                    <p className="whitespace-nowrap">
                                                        Laptop <span className="block text-xs text-primary">Digital</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td>$110.00</td>
                                            <td>$33.00</td>
                                            <td>35</td>
                                            <td>
                                                <button type="button" className="flex items-center text-secondary">
                                                    <IconMultipleForwardRight className="rtl:rotate-180 ltr:mr-1 rtl:ml-1" />
                                                    Email
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/product-camera.jpg" alt="avatar" />
                                                    <p className="whitespace-nowrap">
                                                        Camera <span className="block text-xs text-primary">Digital</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td>$56.07</td>
                                            <td>$26.04</td>
                                            <td>30</td>
                                            <td>
                                                <button type="button" className="flex items-center text-primary">
                                                    <IconMultipleForwardRight className="rtl:rotate-180 ltr:mr-1 rtl:ml-1" />
                                                    Referral
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
