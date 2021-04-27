<template>
    <div class="auth">
        <div class="bg"></div>
        <div class="title-info">
            <img src="../../assets/Logo1.png" alt="">
            <h2 class="title">图书管理系统  后台</h2>
        </div>
        <div class="form">
            <a-tabs>
                <a-tab-pane key="1" tab="登录">
                    <div class="form-input">

                        <div class="user-item">
                            <a-input size="large" placeholder="账户">
                             <template #prefix>
                                <UserOutlined />
                             </template>
                            </a-input>
                        </div>

                        <div class="user-item">
                            <a-input size="large" placeholder="密码">
                                <template #prefix>
                                    <LockOutlined />
                                </template>
                            </a-input>
                        </div>

                        <div class="user-item ">
                             <a href="" id="color-pwd">忘记密码</a>
                        </div>
                        <p></p>
                        <div class="buttom-item">
                            <a-button size="large" type="primary">
                                登录
                            </a-button>
                        </div>
                    </div>
                    
                </a-tab-pane>
                <a-tab-pane key="2" tab="注册">
                    <div class="form-input">

                        <div class="user-item">
                            <a-input size="large" placeholder="账户">
                                <template #prefix>
                                    <UserOutlined />
                                </template>
                            </a-input>
                           
                        </div>

                        <div class="user-item">
                            <a-input size="large" placeholder="密码">
                                <template #prefix>
                                    <LockOutlined />
                                </template>
                            </a-input>
                        </div>

                        <div class="user-item">
                            <a-input size="large" placeholder="邀请码">
                               
                                <template #prefix>
                                    <MenuOutlined />
                                </template>
                            </a-input>
                        </div>

                        <p></p>
                        <div class="buttom-item">
                            <a-button size="large" type="primary">
                                注册
                            </a-button>
                        </div>
                    </div>
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scpoed>
    @import './index.scss';
</style>