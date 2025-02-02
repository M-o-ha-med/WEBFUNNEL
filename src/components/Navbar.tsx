import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { useEffect } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', current: false , id : "Home" },
  { name: 'Tentang kami', href: '/', current: false, id : "VisidanMisi" },
  { name: 'Portofolio', href: '/', current: false, id : "Portfolio"  },
  { name: 'Alur Kerja', href: '/', current: false, id : "AlurKerja"  },
  { name: 'Testimoni', href: '/', current: false, id : "Testimoni"  },
]

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}


export default function Navbar() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  
  return (
    <Disclosure as="nav" className="bg-white shadow-sm w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="flex shrink-0 items-center">
              <img
                alt="Anugerah Cipta Arsitektur"
                src="../logoapp.svg"
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex px-4 py-4 mx-auto font-semibold font-heading space-x-12">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'text-bilbao-600' : 'text-bilbao-400 hover:text-bilbao-600 hover:border-b border-bilbao-500 transition-colors',
                      'px-3 py-2 text-sm  font-medium text-bilbao-700',
                    )}
					onClick={() => {
					let hero = document.getElementById(item.id);
					  if (hero) {
						hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
						window.history.pushState(item.id, item.id, item.href); // Update URL
					  } else {
						console.warn(`Element with id "${item.id}" not found`);
					  }
					
					}}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              className={classNames(
                item.current ? ' ext-bilbao-700' : 'text-bilbao-700',
                'block rounded-md px-3 py-2 text-base font-medium text-bilbao-700',
              )}
				onClick={() => {
				item.current = true;
				let hero = document.getElementById(item.id);
				if (hero) {
					hero.scrollIntoView({ behavior: "smooth", block: "start" });
					window.history.pushState(item.id, item.id, item.href); // Update URL
				} 
				else {
					console.warn(`Element with id "${item.id}" not found`);
				}
			}}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
