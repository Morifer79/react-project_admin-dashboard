import { DashboardList } from "./DashboardList/DashboardList";
import { Container } from '../Constructor/Container/Container';
import { SidebarMenu } from '../SidebarMenu/SidebarMenu';
import { RecentCustomersTable } from "./RecentCustomersTable/RecentCustomersTable";

export const Dashboard = () => {
  const screenWidth = window.innerWidth;
  return (
    <Container>
      {screenWidth > 1439 && <SidebarMenu/>}
      <DashboardList />
      <RecentCustomersTable />
    </Container>
  )
};
