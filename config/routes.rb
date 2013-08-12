ComponentesBasicos::Application.routes.draw do
  get "leccion2/introduccion"

  get "leccion2/menuprincipal"

  get "leccion2/palabrareservada"

  get "leccion2/datos"

  get "leccion2/literal"

  get "leccion2/constante"

  get "leccion2/identificadores"

  get "leccion2/variables"

  get "leccion2/parametros"

  get "leccion2/operadores"

  get "leccion2/Entradaysalidadedatos"

  get "leccion2/cuestionarioinicial"

  get "leccion2/cuestionariofinal"

  get "leccion2/ejer1"

  get "leccion2/ejer2"

  get "leccion2/ejer3"

  get "leccion2/ejer4"

  get "leccion2/ejer5"

  get "leccion2/ejer6"

  get "leccion2/ejer7"

  get "leccion2/ejer8"

  get "leccion2/ejer9"

  get "leccion2/puntuaciones"

  resources :ejercicio1s

  

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => 'leccion2#introduccion'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
