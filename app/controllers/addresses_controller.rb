class AddressesController < ApplicationController
   before_action :set_location
  def index
    @address = @location.addresses
    render component: '@location.address', props: {addresses: @addresses, location: @location}
  end

  def show
    @address = @location.addresses.find(params[:id])
    render component: '@location.address', props: {address: @address, location: @location}
  end

  def new
    @address = @location.addresses.new
    render component: 'addressNew', props: {address: @address, location: @location}
  end

  def create
    @address = @location.addresses.new(location_params)
    if @address.save
      redirect_to user_trips_path
    else
      render component: 'addressNew', props: {address: @address, location: @location}
    end
  end

  def edit
    @address = @location.addresses.find(params[:id])
    render component: 'addressEdit', props: {address: @address, location: @location}
  end

  def update
    @address = @location.addresses.find(params[:id])
    if @address.update(location_params)
      redirect_to user_trips_path
    else
      render component: 'addressEdit', props: {address: @address, location: @location}
    end
  end

  def destroy
    @address = @location.address.find(params[:id])
    @address.destroy
    redirect_to user_trips_path
  end

  private
  def address_params
    params.require(:address.permit(:street_address))
  end

  def set_location
    @location = location.find(params[:location_id])
  end
end