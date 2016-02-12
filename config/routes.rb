Rails.application.routes.draw do
	
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'

  root to: "home#index"
  get '/sass_tutorial', to: 'sassTutorial#index'

end
