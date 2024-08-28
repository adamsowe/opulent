import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function Nav() {
  return (
    <>
        <nav className="fixed flex bg-white w-full h-24 border-b">
        <div className="w-full px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-black">
            OPULENT
            </div>

            <div className="relative flex-grow mx-4 max-w-md">
                <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 text-xs border-gray-300 focus:outline-none placeholder-opacity-0"
                style={{ textAlign: 'center' }}
                />
            </div>

            <ul className="flex space-x-4 text-gray-600">
                <li className="items-center space-x-4">
                    <ShoppingCartIcon className="h-6 w-6 text-black" />
                </li>
                <li className="items-center space-x-4">
                    <UserCircleIcon className="h-6 w-6 text-black" />
                </li>
            </ul>
        </div>
        </nav>

        <nav className="fixed top-24 flex bg-stone-50 shadow-md w-full h-10">
            <div className="w-full items-center">
                <ul className="flex w-full justify-center h-full space-x-4 text-gray-600">
                    <li className="flex items-center px-4 py-2 text-xs uppercase">
                        Best Sellers
                    </li>
                    <li className="flex items-center px-4 py-2 text-xs uppercase">
                        All Products
                    </li>
                    <li className="flex items-center px-4 py-2 text-xs uppercase">
                        Tops
                    </li>
                    <li className="flex items-center px-4 py-2 text-xs uppercase">
                        Bottoms
                    </li>
                    <li className="flex items-center px-4 py-2 text-xs uppercase">
                        Accessories
                    </li>
                </ul>
            </div>
        </nav>
    </>
  );
}
