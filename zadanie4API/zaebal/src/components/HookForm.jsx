import React from 'react';
import {Form} from "react-router-dom";
import {Controller, useForm} from 'react-hook-form'

function HookForm(props) {
    const {control,setValue, watch, register,clearErrors, reset, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {}
    })

    const onSubmit = (data) => console.log(data)
    const error = (data) => console.log(data)

    // const isName = _ => {
    //     console.log("Вызвана")
    //     return true;
    // }


    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit, error)}>
                <input {...register("testName", {required: true})}/><br/><br/>
                {/*<input  {...register("testName", {required: true })} aria-invalid={!!errors.testName }/> <br/><br/>*/}
                {/*Контролируемый input*/}
                {/* eslint-disable-next-line no-undef */}
               <Controller name="disciplineName" control={control} render={({field}) => <input {...field}/>}/>
                <button>Отправить</button>
                <button type={"button"} onClick={() => clearErrors()}>Очистить ошибки</button>
                <button type={"button"} onClick={() => reset()}>Очистить форму</button>
                <button type={"button"} onClick={() => setValue('disciplineName', 'ПИС' )}>Сбросить до значений по умолчанию</button>
                <input  type={"radio"}></input>
                <input type={"radio"}></input>

            </Form>
            {/*Вывод того, что пишут*/}
            {/*{watch('disciplineName')}*/}
        </>
    );
}

export default HookForm;