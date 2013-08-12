require 'test_helper'

class Ejercicio1sControllerTest < ActionController::TestCase
  setup do
    @ejercicio1 = ejercicio1s(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:ejercicio1s)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create ejercicio1" do
    assert_difference('Ejercicio1.count') do
      post :create, ejercicio1: { id: @ejercicio1.id, nom: @ejercicio1.nom }
    end

    assert_redirected_to ejercicio1_path(assigns(:ejercicio1))
  end

  test "should show ejercicio1" do
    get :show, id: @ejercicio1
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @ejercicio1
    assert_response :success
  end

  test "should update ejercicio1" do
    put :update, id: @ejercicio1, ejercicio1: { id: @ejercicio1.id, nom: @ejercicio1.nom }
    assert_redirected_to ejercicio1_path(assigns(:ejercicio1))
  end

  test "should destroy ejercicio1" do
    assert_difference('Ejercicio1.count', -1) do
      delete :destroy, id: @ejercicio1
    end

    assert_redirected_to ejercicio1s_path
  end
end
