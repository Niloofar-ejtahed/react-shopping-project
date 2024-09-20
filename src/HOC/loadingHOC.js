import React from 'react'
import Loading from '../tools/loading'

export default function LoadingHOC({ loading, children }) {

    if (loading) return <Loading />;

    return children;
}
