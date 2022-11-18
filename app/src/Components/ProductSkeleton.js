import { Box, Image, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

function ProductSkeleton() {
    return (
        <Box padding='4' boxShadow='lg' bg='white'>
            <Skeleton height='200px' />
            <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
    )
}

export default ProductSkeleton