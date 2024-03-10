import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../../store';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import IconCaretsDown from '@/components/Icon/IconCaretsDown';
import IconMenuDashboard from '@/components/Icon/Menu/IconMenuDashboard';
import IconCaretDown from '@/components/Icon/IconCaretDown';
import IconMinus from '@/components/Icon/IconMinus';
import IconMenuChat from '@/components/Icon/Menu/IconMenuChat';
import IconMenuMailbox from '@/components/Icon/Menu/IconMenuMailbox';
import IconMenuTodo from '@/components/Icon/Menu/IconMenuTodo';
import IconMenuNotes from '@/components/Icon/Menu/IconMenuNotes';
import IconMenuScrumboard from '@/components/Icon/Menu/IconMenuScrumboard';
import IconMenuContacts from '@/components/Icon/Menu/IconMenuContacts';
import IconMenuInvoice from '@/components/Icon/Menu/IconMenuInvoice';
import IconMenuCalendar from '@/components/Icon/Menu/IconMenuCalendar';
import IconMenuComponents from '@/components/Icon/Menu/IconMenuComponents';
import IconMenuElements from '@/components/Icon/Menu/IconMenuElements';
import IconMenuCharts from '@/components/Icon/Menu/IconMenuCharts';
import IconMenuWidgets from '@/components/Icon/Menu/IconMenuWidgets';
import IconMenuFontIcons from '@/components/Icon/Menu/IconMenuFontIcons';
import IconMenuDragAndDrop from '@/components/Icon/Menu/IconMenuDragAndDrop';
import IconMenuTables from '@/components/Icon/Menu/IconMenuTables';
import IconMenuDatatables from '@/components/Icon/Menu/IconMenuDatatables';
import IconMenuForms from '@/components/Icon/Menu/IconMenuForms';
import IconMenuUsers from '@/components/Icon/Menu/IconMenuUsers';
import IconMenuPages from '@/components/Icon/Menu/IconMenuPages';
import IconMenuAuthentication from '@/components/Icon/Menu/IconMenuAuthentication';
import IconMenuDocumentation from '@/components/Icon/Menu/IconMenuDocumentation';

const Sidebar = () => {
    const router = useRouter();
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [router.pathname]);

    const setActiveRoute = () => {
        let allLinks = document.querySelectorAll('.sidebar ul a.active');
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            element?.classList.remove('active');
        }
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        selector?.classList.add('active');
    };

    const dispatch = useDispatch();
    const { t } = useTranslation();

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="h-full bg-white dark:bg-black">
                    <div className="flex items-center justify-between px-4 py-3">
                        <Link href="/" className="main-logo flex shrink-0 items-center">
                            <img className="ml-[5px] w-8 flex-none" src="/assets/images/logo.png" alt="logo" />
                            <div className='flex-col'>
                            <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">{t('   V B A  ')}</span>
                            <div className='align-middle font-semibold ltr:ml-1.5 rtl:mr-1.5 mt-[-4px] dark:text-white-light'>Vlsi backend adventure</div>    
                            </div>
                            
                        </Link>

                        
                    </div>
                    <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
                        <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
                            

                            <h3 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <IconMinus className="hidden h-5 w-4 flex-none" />
                                <span>{t('Physical Design')}</span>
                            </h3>
							
                            
							
							<li className="menu nav-item">
                                        
										
										<button type="button" className={`${currentMenu === 'PnR' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('PnR')}>
                                    <div className="flex items-center">
                                        <IconMenuPages className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('PnR')}</span>
                                    </div>

                                    <div className={currentMenu !== 'PnR' ? '-rotate-90 rtl:rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'PnR' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/apps/invoice/list">{t('Logical Synthesis')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/preview">{t('PD Input files')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/add">{t('FloorPlan')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/edit">{t('PowerPlan')}</Link>
                                                </li>
												<li>
                                                    <Link href="/apps/invoice/add">{t('Placement')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/edit">{t('Clock Tree Synthesis')}</Link>
                                                </li>
												<li>
                                                    <Link href="/apps/invoice/add">{t('Routing')}</Link>
                                                </li>
                                                
                                            </ul>
                                        </AnimateHeight>
                                    </li>
									
								<li className="menu nav-item">
										<button type="button" className={`${currentMenu === 'PD Analysis' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('PD Analysis')}>
                                    <div className="flex items-center">
                                        <IconMenuPages className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('PD Analysis')}</span>
                                    </div>

                                    <div className={currentMenu !== 'PD Analysis' ? '-rotate-90 rtl:rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'PD Analysis' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/apps/invoice/list">{t('Congestion Analysis')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/preview">{t('Power Analysis')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/add">{t('IR Analysis')}</Link>
                                                </li>                                                
                                            </ul>
                                        </AnimateHeight>
                                    </li>	
									
								
                                 <li className="menu nav-item">
                                       
										
										<button type="button" className={`${currentMenu === 'PD Essentials' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('PD Essentials')}>
                                    <div className="flex items-center">
                                        <IconMenuPages className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('PD Essentials')}</span>
                                    </div>

                                    <div className={currentMenu !== 'PD Essentials' ? '-rotate-90 rtl:rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'PD Essentials' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/apps/invoice/list">{t('Issues in PD')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/preview">{t('Cells in PD')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/add">{t('IO Design')}</Link>
                                                </li>  
                                                <li>
                                                    <Link href="/apps/invoice/list">{t('Delay Models')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/preview">{t('Engineering Change Order')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/add">{t('Types of std Cells')}</Link>
                                                </li>												
                                            </ul>
                                        </AnimateHeight>
                                    </li>									
									
								<li className="menu nav-item">
                                        
										<button type="button" className={`${currentMenu === 'Discontinuity' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('Discontinuity')}>
                                    <div className="flex items-center">
                                        <IconMenuPages className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Discontinuity')}</span>
                                    </div>

                                    <div className={currentMenu !== 'Discontinuity' ? '-rotate-90 rtl:rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>




                                        <AnimateHeight duration={300} height={currentMenu === 'Discontinuity' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/apps/invoice/list">{t('DFM/DFY')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/preview">{t('MC/MM/OCV')}</Link>
                                                </li>
                                               
                                                
                                            </ul>
                                        </AnimateHeight>
                                    </li>	
									
									
							 <h3 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <IconMinus className="hidden h-5 w-4 flex-none" />
                                <span>{t('Physical Verification')}</span>
                            </h3>		
									
							<li className="nav-item">
                                        <Link href="/apps/notes" className="group">
                                            <div className="flex items-center">
                                                <IconMenuNotes className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Design Rule Check (DRC)')}</span>
                                            </div>
                                        </Link>
                                    </li>		
							<li className="nav-item">
                                        <Link href="/apps/notes" className="group">
                                            <div className="flex items-center">
                                                <IconMenuNotes className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Layout vs Schematic (LVS)')}</span>
                                            </div>
                                        </Link>
                                    </li>		
									
	<h3 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <IconMinus className="hidden h-5 w-4 flex-none" />
                                <span>{t('ELECTRICAL RULE CHECK')}</span>
    </h3>		
									
							<li className="nav-item">
                                        <Link href="/apps/notes" className="group">
                                            <div className="flex items-center">
                                                <IconMenuNotes className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('EM/IR')}</span>
                                            </div>
                                        </Link>
                                    </li>			
									
		<h3 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <IconMinus className="hidden h-5 w-4 flex-none" />
                                <span>{t('STATIC TIMING ANALYSIS')}</span>
        </h3>		
						
                            <li className="menu nav-item">
                                <Link href="/widgets" className="group">
                                    <div className="flex items-center">
                                        <IconMenuWidgets className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('STA Basics')}</span>
                                    </div>
                                </Link>
                            </li>
			
									
							<li className="menu nav-item">
                                <Link href="/widgets" className="group">
                                    <div className="flex items-center">
                                        <IconMenuWidgets className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('STA Advanced')}</span>
                                    </div>
                                </Link>
                            </li>		
									
							<li className="menu nav-item">
                                <Link href="/widgets" className="group">
                                    <div className="flex items-center">
                                        <IconMenuWidgets className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('STA numericals')}</span>
                                    </div>
                                </Link>
                            </li>		
									
									
                            

                            
                            <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <IconMinus className="hidden h-5 w-4 flex-none" />
                                <span>{t('Questions and Answers')}</span>
                            </h2>

                           

                            <li className="menu nav-item">
                                <Link href="https://vristo.sbthemes.com" target="_blank" className="nav-link group">
                                    <div className="flex items-center">
                                        <IconMenuDocumentation className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('PD MCQs')}</span>
                                    </div>
                                </Link>
                            </li>
							<li className="menu nav-item">
                                <Link href="https://vristo.sbthemes.com" target="_blank" className="nav-link group">
                                    <div className="flex items-center">
                                        <IconMenuDocumentation className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('PD QnA')}</span>
                                    </div>
                                </Link>
                            </li>
							<li className="menu nav-item">
                                <Link href="https://vristo.sbthemes.com" target="_blank" className="nav-link group">
                                    <div className="flex items-center">
                                        <IconMenuDocumentation className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Digital Electronics QnA')}</span>
                                    </div>
                                </Link>
                            </li>
							<li className="menu nav-item">
                                <Link href="https://vristo.sbthemes.com" target="_blank" className="nav-link group">
                                    <div className="flex items-center">
                                        <IconMenuDocumentation className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('CMOS QnA')}</span>
                                    </div>
                                </Link>
                            </li>
							
							
							
							
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
