class Ejercicio1sController < ApplicationController
  # GET /ejercicio1s
  # GET /ejercicio1s.json
  def index
    @ejercicio1s = Ejercicio1.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @ejercicio1s }
    end
  end

  # GET /ejercicio1s/1
  # GET /ejercicio1s/1.json
  def show
    @ejercicio1 = Ejercicio1.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @ejercicio1 }
    end
  end

  # GET /ejercicio1s/new
  # GET /ejercicio1s/new.json
  def new
    @ejercicio1 = Ejercicio1.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @ejercicio1 }
    end
  end

  # GET /ejercicio1s/1/edit
  def edit
    @ejercicio1 = Ejercicio1.find(params[:id])
  end

  # POST /ejercicio1s
  # POST /ejercicio1s.json
  def create
    @ejercicio1 = Ejercicio1.new(params[:ejercicio1])

    respond_to do |format|
      if @ejercicio1.save
        format.html { redirect_to @ejercicio1, notice: 'Ejercicio1 was successfully created.' }
        format.json { render json: @ejercicio1, status: :created, location: @ejercicio1 }
      else
        format.html { render action: "new" }
        format.json { render json: @ejercicio1.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /ejercicio1s/1
  # PUT /ejercicio1s/1.json
  def update
    @ejercicio1 = Ejercicio1.find(params[:id])

    respond_to do |format|
      if @ejercicio1.update_attributes(params[:ejercicio1])
        format.html { redirect_to @ejercicio1, notice: 'Ejercicio1 was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @ejercicio1.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ejercicio1s/1
  # DELETE /ejercicio1s/1.json
  def destroy
    @ejercicio1 = Ejercicio1.find(params[:id])
    @ejercicio1.destroy

    respond_to do |format|
      format.html { redirect_to ejercicio1s_url }
      format.json { head :no_content }
    end
  end
end
