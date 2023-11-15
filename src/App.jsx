import { useState } from 'react';
import {
  Page,
  Navbar,
  Tabbar,
  TabbarLink,
  Block,
  Icon,
} from 'konsta/react';
import { MdBarcodeReader } from "react-icons/md";
import BarcodeScanner from './components/BarcodeScanner';
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
                material={<MdBarcodeReader className="w-6 h-6" />}
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
                material={<MdBarcodeReader className="w-6 h-6" />}
              />
            )
          }
          label={isTabbarLabels && 'Tab 3'}
        />
      </Tabbar>

      {activeTab === 'tab-1' && <BarcodeScanner />}
      {activeTab === 'tab-2' && (
        <Block strong inset className="space-y-4">
          <p>
            <b>Tab 2</b>
          </p>
          <p>
            <span>
              Dicta beatae repudiandae ab pariatur mollitia praesentium fuga
              ipsum adipisci, quia nam expedita, est dolore eveniet, dolorum
              obcaecati? Veniam repellendus mollitia sapiente minus saepe
              voluptatibus necessitatibus laboriosam incidunt nihil autem.
            </span>
            <span>
              Officia pariatur qui, deleniti eum, et minus nisi aliquam nobis
              hic provident quisquam quidem voluptatem eveniet ducimus. Commodi
              ea dolorem, impedit eaque dolor, sint blanditiis magni accusantium
              natus reprehenderit minima?
            </span>
            <span>
              Dicta reiciendis ut vitae laborum aut repellendus quasi beatae
              nulla sapiente et. Quod distinctio velit, modi ipsam
              exercitationem iste quia eaque blanditiis neque rerum optio, nulla
              tenetur pariatur ex officiis.
            </span>
            <span>
              Consectetur accusamus delectus sit voluptatem at esse! Aperiam
              unde maxime est nemo dicta minus autem esse nobis quibusdam iusto,
              reprehenderit harum, perferendis quae. Ipsum sit fugit similique
              recusandae quas inventore?
            </span>
          </p>
        </Block>
      )}
      {activeTab === 'tab-3' && (
        <Block strong inset className="space-y-4">
          <p>
            <b>Tab 3</b>
          </p>
          <p>
            <span>
              Vero esse ab natus neque commodi aut quidem nobis. Unde, quam
              asperiores. A labore quod commodi autem explicabo distinctio saepe
              ex amet iste recusandae porro consectetur, sed dolorum sapiente
              voluptatibus?
            </span>
            <span>
              Commodi ipsum, voluptatem obcaecati voluptatibus illum hic aliquam
              veritatis modi natus unde, assumenda expedita, esse eum fugit?
              Saepe aliquam ipsam illum nihil facilis, laborum quia, eius ea
              dolores molestias dicta.
            </span>
            <span>
              Consequatur quam laudantium, magnam facere ducimus tempora
              temporibus omnis cupiditate obcaecati tempore? Odit qui a,
              voluptas eveniet similique, doloribus eum dolorum ad, enim ea
              itaque voluptates porro minima. Omnis, magnam.
            </span>
            <span>
              Debitis, delectus! Eligendi excepturi rem veritatis, ad
              exercitationem tempore eveniet voluptates aut labore harum dolorem
              nemo repellendus accusantium quibusdam neque? Itaque iusto
              quisquam reprehenderit aperiam maiores dicta iure necessitatibus
              est.
            </span>
          </p>
        </Block>
      )}
    </Page>
  );
}