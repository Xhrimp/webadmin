import { useMemo } from 'react';

import { paths } from '../../routes/paths';

import { useTranslate } from 'src/locales';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();

  const data = useMemo(() => [
    // OVERVIEW
    // ----------------------------------------------------------------------
    {
      items: [
        {
          title: 'Shopee',
          path: paths.home.dashboard.root,
          children: [
            {
              title: 'Dashboard',
              path: paths.home.dashboard.root,
            },
            {
              title: 'Orders',
              path: paths.home.dashboard.order,
            },
            {
              title: 'Account',
              path: paths.home.dashboard.account,
            },
            {
              title: 'Shopee Store',
              path: paths.home.dashboard.shopeeStore,
            },
            {
              title: 'Shopee Chat',
              path: paths.home.dashboard.shopeeChat,
            },
          ],
        },
        {
          title: 'Design',
          path: paths.home.design.PODDesign,
          children: [
            {
              title: 'POD Design',
              path: paths.home.design.PODDesign,
            },
            {
              title: 'Mica Design',
              path: paths.home.design.micaDesign,
            },
            {
              title: 'Phone Case Design',
              path: paths.home.design.phoneCaseDesign,
            },
            {
              title: 'Carpet Design',
              path: paths.home.design.carpetDesign,
            },
            {
              title: 'Face Cut',
              path: paths.home.design.faceCut,
            },
          ],
        },
        {
          title: 'Send Supllier',
          path: paths.home.sendSupplier.micaPod,
          children: [
            {
              title: 'Mica Pod',
              path: paths.home.sendSupplier.micaPod,
            },
            {
              title: 'Mica Custom',
              path: paths.home.sendSupplier.micaCustom,
            },
            {
              title: 'Phone Case Pod',
              path: paths.home.sendSupplier.phoneCasePod,
            },
            {
              title: 'Phone Case Custom',
              path: paths.home.sendSupplier.phoneCaseCustom,
            },
            {
              title: 'Carpet Pod',
              path: paths.home.sendSupplier.carpetPod,
            },
          ],
        },
        {
          title: 'Fulfillment',
          path: paths.home.fulfillment.scanner,
          children: [
            {
              title: 'Scanner',
              path: paths.home.fulfillment.scanner,
            },
            {
              title: 'Scanner Camera',
              path: paths.home.fulfillment.scannerCam,
            },
          ],
        },
      ],
    },
  ]);

  return data;
}
