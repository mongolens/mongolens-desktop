import { useState } from 'react';

interface DashboardItemProps {
  id: number;
  name: string;
}

interface Database {
  id: number;
  name: string;
  tables: {
    name: string;
    indexes: {
      name: string;
      isPrimary: boolean;
    }[];
  }[];
}

interface ConnectionItemProps {
  id: number;
  name: string;
  databases: Database[];
}

interface Table {
  name: string;
  indexes: {
    name: string;
    isPrimary: boolean;
  }[];
}

interface DatabaseItemProps {
  id: number;
  name: string;
  tables: Table[];
}

interface Index {
  name: string;
  isPrimary: boolean;
}

interface Dashboard {
  id: number;
  name: string;
}

interface TableIndex {
  name: string;
  isPrimary: boolean;
}

interface Database {
  id: number;
  name: string;
  tables: {
    name: string;
    indexes: TableIndex[];
  }[];
}

interface Connection {
  id: number;
  name: string;
  databases: Database[];
}
interface TableItemProps {
  name: string;
  indexes: Index[];
}

const DashboardItem: React.FC<DashboardItemProps> = ({ id, name }) => {
  return (
    <div className="flex items-center mb-2">
      <i className="fad fa-tachometer-alt text-xs mr-2"></i>
      <span className="capitalize font-medium text-sm hover:text-teal-600 transition duration-500">
        {name}
      </span>
      <button className="ml-auto text-xs text-gray-400 hover:text-teal-600">
        <i className="fad fa-sync-alt"></i> {/* Refresh Icon */}
      </button>
      <button className="ml-2 text-xs text-gray-400 hover:text-teal-600">
        <i className="fad fa-edit"></i> {/* Edit Icon */}
      </button>
    </div>
  );
};

const DatabaseItem: React.FC<DatabaseItemProps> = ({ id, name, tables }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center mb-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fad fa-database text-xs mr-2"></i>
        <span className="capitalize font-medium text-sm hover:text-teal-600 transition duration-500">
          {name}
        </span>
        <button className="ml-auto text-xs text-gray-400 hover:text-teal-600">
          <i className="fad fa-sync-alt"></i> {/* Refresh Icon */}
        </button>
      </div>
      {isOpen && (
        <div className="ml-4">
          {tables.map((table, index) => (
            <TableItem key={index} {...table} />
          ))}
        </div>
      )}
    </div>
  );
};

const ConnectionItem: React.FC<ConnectionItemProps> = ({
  id,
  name,
  databases,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center mb-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fad fa-plug text-xs mr-2"></i>
        <span className="capitalize font-medium text-sm hover:text-teal-600 transition duration-500">
          {name}
        </span>
        <button className="ml-auto text-xs text-gray-400 hover:text-teal-600">
          <i className="fad fa-edit"></i> {/* Edit Icon */}
        </button>
      </div>
      {isOpen && (
        <div className="ml-4">
          {databases.map((database) => (
            <DatabaseItem key={database.id} {...database} />
          ))}
        </div>
      )}
    </div>
  );
};

const TableItem: React.FC<TableItemProps> = ({ name, indexes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center mb-1">
        <i className="fad fa-file-alt text-xs mr-2"></i>
        <span className="capitalize font-medium text-sm hover:text-teal-600 transition duration-500">
          {name}
        </span>
        <button
          className="ml-auto text-xs text-gray-400 hover:text-teal-600"
          onClick={() => setIsOpen(!isOpen)} // Göz ikonuna tıklandığında indexleri göster
        >
          <i className="fad fa-eye"></i> {/* Inspect Icon */}
        </button>
      </div>
      {isOpen && (
        <div className="ml-4">
          {indexes.map((index) => (
            <div key={index.name} className="flex items-center mb-1">
              <i
                className={`fad fa-${index.isPrimary ? 'key' : 'tag'} text-xs mr-2`}
              ></i>
              <span className="text-xs text-gray-600">{index.name}</span>{' '}
              {/* Daha küçük karakter */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [dashboards] = useState<Dashboard[]>([
    { id: 1, name: 'My Dashboard' },
    { id: 2, name: 'Sales Dashboard' },
  ]);

  const [connections] = useState<Connection[]>([
    {
      id: 1,
      name: 'Connection 1',
      databases: [
        {
          id: 1,
          name: 'User DB',
          tables: [
            {
              name: 'Users',
              indexes: [
                { name: 'PK_Users', isPrimary: true },
                { name: 'IX_Users_Email', isPrimary: false },
              ],
            },
            {
              name: 'Orders',
              indexes: [
                { name: 'PK_Orders', isPrimary: true },
                { name: 'IX_Orders_UserID', isPrimary: false },
              ],
            },
            {
              name: 'Products',
              indexes: [{ name: 'PK_Products', isPrimary: true }],
            },
          ],
        },
        {
          id: 2,
          name: 'Admin DB',
          tables: [
            {
              name: 'Settings',
              indexes: [{ name: 'PK_Settings', isPrimary: true }],
            },
            {
              name: 'Logs',
              indexes: [{ name: 'PK_Logs', isPrimary: true }],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Connection 2',
      databases: [
        {
          id: 3,
          name: 'Sales DB',
          tables: [
            {
              name: 'Sales',
              indexes: [{ name: 'PK_Sales', isPrimary: true }],
            },
            {
              name: 'Customers',
              indexes: [{ name: 'PK_Customers', isPrimary: true }],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div
      id="sideBar"
      className="relative flex flex-col bg-white border-r border-gray-300 p-6 w-64 h-screen shadow-xl mt-12"
    >
      {/* Dashboard Section */}
      <div className="flex flex-col mb-4">
        <p className="uppercase text-xs text-gray-600 mb-2 tracking-wider">
          Dashboards
        </p>
        {dashboards.map((dashboard) => (
          <DashboardItem key={dashboard.id} {...dashboard} />
        ))}
      </div>

      {/* Connections Section */}
      <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
        Connections
      </p>
      {connections.map((connection) => (
        <ConnectionItem key={connection.id} {...connection} />
      ))}

      {/* Additional Options */}
      <div className="flex flex-col mt-4">
        <div className="flex items-center mb-3 cursor-pointer">
          <i className="fad fa-cog text-xs mr-2"></i>
          <span className="capitalize font-medium text-sm hover:text-teal-600 transition duration-500">
            Ayarlar
          </span>
        </div>
        <div className="flex items-center mb-3 cursor-pointer">
          <i className="fad fa-bell text-xs mr-2"></i>
          <span className="capitalize font-medium text-sm hover:text-teal-600 transition duration-500">
            Bildirimler
          </span>
        </div>
        <div className="flex items-center mb-3 cursor-pointer">
          <i className="fad fa-sign-out-alt text-xs mr-2"></i>
          <span className="capitalize font-medium text-sm hover:text-teal-600 transition duration-500">
            Çıkış
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
