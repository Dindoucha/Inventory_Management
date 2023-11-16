import { useState } from 'react';
import {
  Page,
  Navbar,
  Tabbar,
  TabbarLink,
  Block,
  Icon,
} from 'konsta/react';
import { MdBarcodeReader, MdOutlineTableChart, MdOutlineSettings } from "react-icons/md";
import BarcodeScanner from './components/BarcodeScanner';
import InvontoryTable from './components/InvontoryTable'
export default function TabbarPage() {
  const [activeTab, setActiveTab] = useState('tab-1');
  const isTabbarLabels = false
  const isTabbarIcons = true
  return (
    <Page>
      <Navbar
        title="Gestion de stock"
        />

      <Tabbar
        labels={isTabbarLabels}
        icons={isTabbarIcons}
        className="left-0 bottom-0 fixed"
      >
        <TabbarLink
          active={activeTab === 'tab-1'}
          onClick={() => setActiveTab('tab-1')}
          icon={
            isTabbarIcons && (
              <Icon
                material={<MdBarcodeReader className="w-6 h-6" />}
              />
            )
          }
          label={isTabbarLabels && 'Tab 1'}
        />
        <TabbarLink
          active={activeTab === 'tab-2'}
          onClick={() => setActiveTab('tab-2')}
          icon={
            isTabbarIcons && (
              <Icon
                material={<MdOutlineTableChart className="w-6 h-6" />}
              />
            )
          }
          label={isTabbarLabels && 'Tab 2'}
        />
        <TabbarLink
          active={activeTab === 'tab-3'}
          onClick={() => setActiveTab('tab-3')}
          icon={
            isTabbarIcons && (
              <Icon
                material={<MdOutlineSettings className="w-6 h-6" />}
              />
            )
          }
          label={isTabbarLabels && 'Tab 3'}
        />
      </Tabbar>

      {activeTab === 'tab-1' && <BarcodeScanner />}
      {activeTab === 'tab-2' && <InvontoryTable />}
      {activeTab === 'tab-3' && (<Block strong inset className="space-y-4"></Block>)}
    </Page>
  );
}